import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sebzf9cjk.css';
import '../../css/u/ujddx7bhk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sebzf9cjk"/><path class="ujddx7bhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-data"} {...others} />);
}

export default Component;
