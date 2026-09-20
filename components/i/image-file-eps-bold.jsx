import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d08wqdb5c.css';
import '../../css/s/sc9v9pb-o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d08wqdb5c"/><path class="sc9v9pb-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:image-file-eps-bold"} {...others} />);
}

export default Component;
