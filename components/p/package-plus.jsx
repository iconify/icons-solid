import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/ujgvr6brf.css';
import '../../css/e/emgk659tq.css';
import '../../css/o/op06tcc9j.css';
import '../../css/i/ioten_ypp.css';
import '../../css/g/g8-fd1i8q.css';
import '../../css/y/yiw0l7b8r.css';
import '../../css/a/a89icdtul.css';
import '../../css/a/aw8_cvj-j.css';
import '../../css/s/sbj3fsbgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ujgvr6brf wm-shadow"/><path class="emgk659tq"/><path class="op06tcc9j"/><path class="ioten_ypp"/><path class="g8-fd1i8q wm-shine"/><path class="wm-s yiw0l7b8r"/><path class="a89icdtul wm-s"/><path class="aw8_cvj-j wm-s"/><path class="sbj3fsbgy wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:package-plus"} {...others} />);
}

export default Component;
