import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgpzimtyu.css';
import '../../css/b/bydz9ac_v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hgpzimtyu"/><path class="bydz9ac_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chart-cluster-bar"} {...others} />);
}

export default Component;
