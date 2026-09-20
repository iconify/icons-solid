import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zz1zejb7f.css';
import '../../css/i/i9lomcmsw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zz1zejb7f"/><path class="i9lomcmsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:aave"} {...others} />);
}

export default Component;
