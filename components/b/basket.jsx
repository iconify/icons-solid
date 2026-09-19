import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pydz04b8f.css';
import '../../css/o/ockmixada.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pydz04b8f"/><path class="ockmixada"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:basket"} {...others} />);
}

export default Component;
