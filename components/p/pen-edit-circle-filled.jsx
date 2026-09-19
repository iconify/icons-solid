import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fza6ibbjn.css';
import '../../css/b/bazy2ab2w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fza6ibbjn"/><path class="bazy2ab2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:pen-edit-circle-filled"} {...others} />);
}

export default Component;
