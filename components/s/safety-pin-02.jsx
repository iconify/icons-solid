import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r3v884hcy.css';
import '../../css/g/g1ere0j-x.css';
import '../../css/t/t68ckc50t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r3v884hcy"/><circle class="g1ere0j-x"/><path class="t68ckc50t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:safety-pin-02"} {...others} />);
}

export default Component;
