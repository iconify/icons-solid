import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cq4n2vb1a.css';
import '../../css/p/pwrb__blp.css';
import '../../css/i/ic_zdt4yu.css';
import '../../css/z/z3_5cgb-n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cq4n2vb1a"/><path class="pwrb__blp"/><path class="ic_zdt4yu"/><path class="z3_5cgb-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-capture-48"} {...others} />);
}

export default Component;
