import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ousr7gb-s.css';
import '../../css/o/o_v56d7tv.css';
import '../../css/p/plon33w2y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ousr7gb-s"/><path class="o_v56d7tv"/><path class="plon33w2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:panel-right"} {...others} />);
}

export default Component;
