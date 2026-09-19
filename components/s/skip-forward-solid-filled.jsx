import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-zstca3u.css';
import '../../css/q/qivzlzbeu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d-zstca3u"/><path class="qivzlzbeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:skip-forward-solid-filled"} {...others} />);
}

export default Component;
