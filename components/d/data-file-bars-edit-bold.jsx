import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wzh587b2u.css';
import '../../css/e/e8loo8vjx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wzh587b2u"/><path class="e8loo8vjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:data-file-bars-edit-bold"} {...others} />);
}

export default Component;
