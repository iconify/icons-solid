import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-x6_p_np.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a-x6_p_np"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:not-superset-of"} {...others} />);
}

export default Component;
