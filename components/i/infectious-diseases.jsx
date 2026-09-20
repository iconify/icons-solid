import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fojrlp28i.css';
import '../../css/j/jfv0gyb_j.css';
import '../../css/r/rkoocsb8y.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="fojrlp28i"/><path class="jfv0gyb_j"/><path class="rkoocsb8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:infectious-diseases"} {...others} />);
}

export default Component;
