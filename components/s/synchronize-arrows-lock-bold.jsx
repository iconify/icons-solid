import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkulqzb4r.css';
import '../../css/b/bdlooccco.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lkulqzb4r"/><path class="bdlooccco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:synchronize-arrows-lock-bold"} {...others} />);
}

export default Component;
