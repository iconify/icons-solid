import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aik43r5pi.css';
import '../../css/e/eb-i0y0sh.css';
import '../../css/q/qc8hk8p9a.css';
import '../../css/v/v2dcsq4ql.css';
import '../../css/q/qijs0vb1u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="aik43r5pi"/><path class="eb-i0y0sh"/><circle class="qc8hk8p9a"/><circle class="v2dcsq4ql"/><circle class="qijs0vb1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:gui-management"} {...others} />);
}

export default Component;
