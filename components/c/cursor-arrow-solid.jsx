import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dl_zhm2ww.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dl_zhm2ww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:cursor-arrow-solid"} {...others} />);
}

export default Component;
