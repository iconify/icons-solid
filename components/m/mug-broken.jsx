import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f_18xcbpp.css';
import '../../css/a/ab9oag7th.css';
import '../../css/z/z_d3a3bzf.css';
import '../../css/j/jlzv4qbob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f_18xcbpp"/><path class="ab9oag7th"/><path class="z_d3a3bzf"/><path class="jlzv4qbob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mug-broken"} {...others} />);
}

export default Component;
