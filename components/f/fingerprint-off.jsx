import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pbnjg2bxi.css';
import '../../css/s/s5xnmdbdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pbnjg2bxi"/><path class="s5xnmdbdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:fingerprint-off"} {...others} />);
}

export default Component;
