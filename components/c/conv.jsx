import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7azwk40j.css';
import '../../css/z/zx-jj4ivt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m7azwk40j"/><path class="zx-jj4ivt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:conv"} {...others} />);
}

export default Component;
