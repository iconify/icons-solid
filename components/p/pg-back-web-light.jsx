import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zq-whqbyl.css';
import '../../css/n/nsw7x4gvs.css';
import '../../css/e/epapbpbyt.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="zq-whqbyl"/><path class="nsw7x4gvs"/><path class="epapbpbyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pg-back-web-light"} {...others} />);
}

export default Component;
