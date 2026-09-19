import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m4jss5ybp.css';
import '../../css/f/flijmdbvx.css';
import '../../css/b/bf1x1db8j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGs9Grld5n"><g class="s9cl3zbei"><path class="m4jss5ybp"/><path class="flijmdbvx"/><path class="bf1x1db8j"/></g></mask></defs><path mask="url(#SVGs9Grld5n)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:one-to-one"} {...others} />);
}

export default Component;
