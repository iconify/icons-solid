import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z68h5ubme.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z68h5ubme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:volume-4"} {...others} />);
}

export default Component;
