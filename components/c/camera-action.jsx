import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs6pe8bhf.css';
import '../../css/u/uhsg7-z6r.css';
import '../../css/v/vn8_ajdxo.css';
import '../../css/o/oclompb7u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hs6pe8bhf"/><path class="uhsg7-z6r"/><path class="vn8_ajdxo"/><circle class="oclompb7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:camera-action"} {...others} />);
}

export default Component;
