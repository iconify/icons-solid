import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ho624zber.css';
import '../../css/a/adot17bzl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ho624zber"/><path class="adot17bzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-radio-circle-marked"} {...others} />);
}

export default Component;
