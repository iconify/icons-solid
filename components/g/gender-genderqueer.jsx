import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p22cx9bbg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p22cx9bbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:gender-genderqueer"} {...others} />);
}

export default Component;
