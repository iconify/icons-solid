import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6g-occ4g.css';
import '../../css/l/luiwpibjx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k6g-occ4g"/><path class="luiwpibjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:box-3d-upload-fill"} {...others} />);
}

export default Component;
