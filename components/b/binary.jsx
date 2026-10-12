import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uk-7xnb5f.css';
import '../../css/u/u4qfdrb5f.css';
import '../../css/v/vt3udxajo.css';
import '../../css/o/ogs1xppyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="uk-7xnb5f"/><rect class="u4qfdrb5f"/><rect class="vt3udxajo"/><path class="ogs1xppyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:binary"} {...others} />);
}

export default Component;
