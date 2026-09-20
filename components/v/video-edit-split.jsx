import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5ucl9bwa.css';
import '../../css/t/t28yzsb-k.css';
import '../../css/z/z7mahnbzw.css';
import '../../css/l/le1m9tbnq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l5ucl9bwa"/><path class="t28yzsb-k"/><path class="z7mahnbzw"/><path class="le1m9tbnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:video-edit-split"} {...others} />);
}

export default Component;
