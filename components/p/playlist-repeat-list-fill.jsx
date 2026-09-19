import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bsr4tr44z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bsr4tr44z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:playlist-repeat-list-fill"} {...others} />);
}

export default Component;
