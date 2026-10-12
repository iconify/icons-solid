import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sh3w77bch.css';
import '../../css/n/nljbfnawl.css';
import '../../css/k/kq6il2bnl.css';
import '../../css/r/r2204dhie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 12 4.49)" class="sh3w77bch"/><path class="nljbfnawl"/><circle transform="rotate(90 12 4.49)" class="kq6il2bnl"/><path class="r2204dhie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:justice"} {...others} />);
}

export default Component;
