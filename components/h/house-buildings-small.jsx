import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zcv_oxbkw.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="zcv_oxbkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:house-buildings-small"} {...others} />);
}

export default Component;
