import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trxr8zl8z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="trxr8zl8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:single-neutral-actions-remove-bold"} {...others} />);
}

export default Component;
