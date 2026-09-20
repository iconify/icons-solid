import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oukifyh5x.css';
import '../../css/g/ggjrekbat.css';
import '../../css/b/bxq3mlbxt.css';
import '../../css/b/bcxsirbeb.css';
import '../../css/a/a6q4bf3jp.css';
import '../../css/w/wqbastxfw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="oukifyh5x"/><path class="ggjrekbat"/><path class="bxq3mlbxt"/><path class="bcxsirbeb"/><path class="a6q4bf3jp"/><path class="wqbastxfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:binoculars"} {...others} />);
}

export default Component;
