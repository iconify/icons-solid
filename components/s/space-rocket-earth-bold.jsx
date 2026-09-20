import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mm9liwb3f.css';
import '../../css/g/g451w2_7g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mm9liwb3f"/><path class="g451w2_7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:space-rocket-earth-bold"} {...others} />);
}

export default Component;
