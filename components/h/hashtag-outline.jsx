import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvvpg1bae.css';
import '../../css/o/o2fnn15tf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zvvpg1bae"/><path class="o2fnn15tf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:hashtag-outline"} {...others} />);
}

export default Component;
