import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zy-25wbby.css';
import '../../css/e/e494olp2w.css';
import '../../css/a/a68zt3k5a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zy-25wbby"/><path class="e494olp2w"/><path class="a68zt3k5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:snowflake"} {...others} />);
}

export default Component;
