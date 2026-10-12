import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hom_x8bcf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hom_x8bcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:not-equal"} {...others} />);
}

export default Component;
