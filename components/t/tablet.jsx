import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6b184-4c.css';
import '../../css/k/kv63i2wli.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k6b184-4c"/><path class="kv63i2wli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:tablet"} {...others} />);
}

export default Component;
