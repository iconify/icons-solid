import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k17b-1bez.css';
import '../../css/f/flaiagb5f.css';
import '../../css/p/pknpwpb5q.css';
import '../../css/b/bpo0h2box.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k17b-1bez"/><path class="flaiagb5f"/><path class="pknpwpb5q"/><path class="bpo0h2box"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:house-user"} {...others} />);
}

export default Component;
