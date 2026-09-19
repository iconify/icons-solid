import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwo3tlmee.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="hwo3tlmee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:circlenextempty"} {...others} />);
}

export default Component;
