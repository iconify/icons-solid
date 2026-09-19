import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/if7zwef8z.css';
import '../../css/b/bth-2hbjx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="if7zwef8z"/><path class="bth-2hbjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:edit"} {...others} />);
}

export default Component;
