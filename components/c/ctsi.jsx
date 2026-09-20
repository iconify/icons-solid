import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emnh37b7g.css';
import '../../css/z/zq6-f5buz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="emnh37b7g"/><path class="zq6-f5buz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ctsi"} {...others} />);
}

export default Component;
