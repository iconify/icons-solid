import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b2mhy_8hj.css';
import '../../css/j/jnb6jc3hh.css';
import '../../css/b/bqo_ht36p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="b2mhy_8hj"/><path class="jnb6jc3hh"/><path class="bqo_ht36p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:laboratory-drug-file"} {...others} />);
}

export default Component;
