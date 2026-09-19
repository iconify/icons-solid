import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/za8njebkw.css';
import '../../css/z/zstbz94ff.css';

const viewBox = {"width":12,"height":12};
const content = `<circle class="za8njebkw"/><circle class="zstbz94ff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:record-fill-12"} {...others} />);
}

export default Component;
