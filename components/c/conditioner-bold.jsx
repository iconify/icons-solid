import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kug-ohb2i.css';
import '../../css/s/s78y6d9hi.css';
import '../../css/j/jdekhpbko.css';
import '../../css/d/d6wcrsuxf.css';
import '../../css/g/gn_cbwboj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kug-ohb2i"/><path clip-rule="evenodd" class="s78y6d9hi"/><path clip-rule="evenodd" class="jdekhpbko"/><path clip-rule="evenodd" class="d6wcrsuxf"/><path class="gn_cbwboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:conditioner-bold"} {...others} />);
}

export default Component;
