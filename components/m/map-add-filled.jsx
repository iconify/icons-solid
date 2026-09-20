import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tx0an_mmx.css';
import '../../css/s/spq8jsdzh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tx0an_mmx"/><path class="spq8jsdzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:map-add-filled"} {...others} />);
}

export default Component;
