import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdr6idi7u.css';
import '../../css/r/rpykv1bud.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="sdr6idi7u"/><path class="rpykv1bud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:tape-drive-solid"} {...others} />);
}

export default Component;
