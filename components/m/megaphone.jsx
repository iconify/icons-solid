import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5d53x3ua.css';
import '../../css/s/s8qbt4dvj.css';
import '../../css/z/zsvj6acrk.css';
import '../../css/b/b0i5739ts.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l5d53x3ua"/><path class="s8qbt4dvj"/><path class="zsvj6acrk"/><path class="b0i5739ts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:megaphone"} {...others} />);
}

export default Component;
