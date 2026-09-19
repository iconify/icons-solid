import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3s9lacyv.css';
import '../../css/n/n4qa2bbyo.css';
import '../../css/b/bh5tjhb6h.css';

const viewBox = {"width":128,"height":128};
const content = `<circle class="l3s9lacyv"/><circle class="n4qa2bbyo"/><circle class="bh5tjhb6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:julia"} {...others} />);
}

export default Component;
