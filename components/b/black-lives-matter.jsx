import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zu5nodbov.css';
import '../../css/w/wu_mdhb5f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zu5nodbov"/><path class="wu_mdhb5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:black-lives-matter"} {...others} />);
}

export default Component;
