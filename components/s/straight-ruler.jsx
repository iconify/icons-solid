import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-lgg5lrv.css';
import '../../css/f/fbsjnybco.css';
import '../../css/q/q-97-wbjf.css';
import '../../css/m/mk2e5acas.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="n-lgg5lrv"/><path class="fbsjnybco"/><path class="q-97-wbjf"/><path class="mk2e5acas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:straight-ruler"} {...others} />);
}

export default Component;
