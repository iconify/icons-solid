import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bm3i78bcl.css';
import '../../css/d/d0bz8sb9m.css';
import '../../css/z/zzlmo8aoy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bm3i78bcl"/><path class="d0bz8sb9m"/><path class="zzlmo8aoy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:confused"} {...others} />);
}

export default Component;
