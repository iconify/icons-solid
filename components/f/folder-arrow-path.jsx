import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trilp1bbw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="trilp1bbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:folder-arrow-path"} {...others} />);
}

export default Component;
