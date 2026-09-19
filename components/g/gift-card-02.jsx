import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sobe6ub7g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sobe6ub7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:gift-card-02"} {...others} />);
}

export default Component;
